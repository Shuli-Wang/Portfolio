import React, { useState } from "react";

function TBD() {

  const [bricks, setBricks] = useState([]);
  const [isWallBuilt, setIsWallBuilt] = useState(false);

  const addBrick = () => {
    const container = document.querySelector(".container-basic");
    const containerWidth = container.offsetWidth; // Get the container width
    const brickWidth = 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Brick width in pixels

    const randomLeft = Math.max(
      0,
      Math.min(
        Math.random() * (containerWidth - brickWidth), // Random position within the container
        containerWidth - brickWidth
      )
    );

    const id = Math.random().toString(36).substring(2, 11);
    setBricks((prevBricks) => {
      const newBricks = [...prevBricks, { id, left: randomLeft, width: brickWidth }];
      checkWallBuilt(newBricks, containerWidth); // Check if the wall is built
      return newBricks;
    });

    /*
    // Remove the brick after it falls
    setTimeout(() => {
      setBricks((prevBricks) => prevBricks.filter((brick) => brick.id !== id));
    }, 8000);
    */
  };

  const checkWallBuilt = (bricks, containerWidth) => {
    // Sort bricks by their `left` position
    const sortedBricks = bricks.sort((a, b) => a.left - b.left);

    // Merge overlapping or adjacent bricks
    let totalWidthCovered = 0;
    let endOfLastBrick = 0;

    sortedBricks.forEach((brick) => {
      const brickStart = brick.left;
      const brickEnd = brick.left + brick.width;

      if (brickStart > endOfLastBrick) {
        // If there's a gap, add this brick's full width to the covered width
        totalWidthCovered += brick.width;
      } else {
        // If overlapping or adjacent, only add the uncovered part
        totalWidthCovered += Math.max(0, brickEnd - endOfLastBrick);
      }

      // Update the end position of the last covered brick
      endOfLastBrick = Math.max(endOfLastBrick, brickEnd);
    });

    // If total width covered matches or exceeds container width, set wall built
    if (totalWidthCovered >= 0.8 * containerWidth) {
      setIsWallBuilt(true);
    }
  };

  return (
    <div className='container-basic'>
      <h1 style={{ marginTop: '10%', padding: '6px' }}>Construction In&nbsp;Progress&nbsp;🏗️</h1>
      <h1 style={{ fontWeight: 'normal', fontSize: '1rem', padding: '6px' }}>
        Drop a brick and keep things rolling!
      </h1>
      <button
        className='button-basic'
        style={{ margin: '8%' }}
        onClick={addBrick}
        disabled={isWallBuilt}>
        {isWallBuilt ? "Thanks 🥰 You helped a lot!" : "Join the fun 🧱"}
      </button>
      {bricks.map((brick) => (
        <div
          key={brick.id}
          className="brick"
          style={{ left: brick.left }}
        ></div>
      ))}

    </div>
  );
}

export default TBD;