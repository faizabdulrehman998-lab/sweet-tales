import React, { useState, useEffect, useRef, useCallback } from "react";
import { resolveCatMouse } from "../sprites/catMouse";
import {
  catIdle,
  catWalk1,
  catWalk2,
  catPounce,
  mouseIdle,
  mouseRun1,
  mouseRun2,
  cheese,
  platformTop,
  platformSide,
  platformFront,
  cloud,
  tree,
} from "../sprites/catMouse";

// PixelSprite component for rendering sprites
function PixelSprite({ grid, px = 4, className, style, flip, palette = resolveCatMouse }) {
  const rows = grid.length;
  const cols = grid[0].length;
  const w = cols * px;
  const h = rows * px;
  return (
    <div
      className={`pixel-sprite ${className || ""}`}
      style={{
        width: w || undefined,
        height: h || undefined,
        transform: flip ? "scaleX(-1)" : undefined,
        imageRendering: "pixelated",
        ...style,
      }}
    >
      <svg
        width={w || undefined}
        height={h || undefined}
        viewBox={`0 0 ${cols} ${rows}`}
        shapeRendering="crispEdges"
        style={{ display: "block", imageRendering: "pixelated" }}
      >
        {grid.map((row, y) =>
          row
            .split("")
            .map((ch, x) => {
              const fill = palette(ch);
              return fill ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} /> : null;
            })
        )}
      </svg>
    </div>
  );
}

// Parallax background layer
function ParallaxLayer({ children, speed, className, style }) {
  return (
    <div
      className={`parallax-layer ${className || ""}`}
      style={{
        transform: `translate3d(0, 0, 0)`,
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Game UI components
function GameUI({ score, lives, level, onPause, paused, onResume, gameOver, onRestart }) {
  if (gameOver) {
    return (
      <div className="game-overlay game-over">
        <div className="game-over-panel">
          <h2 className="game-over-title">GAME OVER</h2>
          <p className="game-over-score">Final Score: {score}</p>
          <p className="game-over-level">Level Reached: {level}</p>
          <button className="game-btn" onClick={onRestart}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }

  if (paused) {
    return (
      <div className="game-overlay paused">
        <div className="game-overlay-panel">
          <h2 className="game-overlay-title">PAUSED</h2>
          <button className="game-btn" onClick={onResume}>
            RESUME
          </button>
          <button className="game-btn game-btn-secondary" onClick={onRestart}>
            RESTART
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-ui">
      <div className="game-hud">
        <div className="hud-item">
          <span className="hud-label">SCORE</span>
          <span className="hud-value">{score.toString().padStart(6, "0")}</span>
        </div>
        <div className="hud-item">
          <span className="hud-label">LEVEL</span>
          <span className="hud-value">{level}</span>
        </div>
        <div className="hud-item lives">
          <span className="hud-label">LIVES</span>
          <div className="lives-display">
            {Array.from({ length: 3 }, (_, i) => (
              <PixelSprite
                key={i}
                grid={catIdle}
                px={2}
                className={i < lives ? "life-full" : "life-empty"}
              />
            ))}
          </div>
        </div>
      </div>
      <button className="pause-btn" onClick={onPause} aria-label="Pause game">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </svg>
      </button>
    </div>
  );
}

// Touch controls for mobile
function TouchControls({ onLeft, onRight, onJump, onPounce }) {
  return (
    <div className="touch-controls" aria-hidden="true">
      <div className="touch-left">
        <button className="touch-btn" onTouchStart={onLeft} onTouchEnd={() => onLeft(false)} onMouseDown={() => onLeft(true)} onMouseUp={() => onLeft(false)} onMouseLeave={() => onLeft(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="touch-btn" onTouchStart={onRight} onTouchEnd={() => onRight(false)} onMouseDown={() => onRight(true)} onMouseUp={() => onRight(false)} onMouseLeave={() => onRight(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="touch-right">
        <button className="touch-btn jump-btn" onTouchStart={onJump} onTouchEnd={() => onJump(false)} onMouseDown={() => onJump(true)} onMouseUp={() => onJump(false)} onMouseLeave={() => onJump(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="4 14 12 6 20 14" />
            <line x1="12" y1="6" x2="12" y2="18" />
          </svg>
        </button>
        <button className="touch-btn pounce-btn" onTouchStart={onPounce} onTouchEnd={() => onPounce(false)} onMouseDown={() => onPounce(true)} onMouseUp={() => onPounce(false)} onMouseLeave={() => onPounce(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 2v20M17 5l-5 7-5-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function CatMouseGame() {
  const canvasRef = useRef(null);
  const gameContainerRef = useRef(null);
  
  // Game state
  const [gameState, setGameState] = useState("playing"); // playing, paused, gameOver
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [catPos, setCatPos] = useState({ x: 100, y: 300 });
  const [catVel, setCatVel] = useState({ x: 0, y: 0 });
  const [catFrame, setCatFrame] = useState(0);
  const [catDirection, setCatDirection] = useState(1); // 1 = right, -1 = left
  const [catState, setCatState] = useState("idle"); // idle, walk, pounce
  const [mice, setMice] = useState([]);
  const [cheeses, setCheeses] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [particles, setParticles] = useState([]);
  const [cameraX, setCameraX] = useState(0);
  const [keys, setKeys] = useState({ left: false, right: false, jump: false, pounce: false });
  
  // Constants
  const GRAVITY = 0.8;
  const JUMP_FORCE = -18;
  const MOVE_SPEED = 6;
  const MAX_SPEED = 10;
  const POUNCE_SPEED = 20;
  const CAT_WIDTH = 32 * 3;
  const CAT_HEIGHT = 32 * 3;
  const MOUSE_WIDTH = 16 * 3;
  const MOUSE_HEIGHT = 16 * 3;
  const GROUND_Y = 400;
  const WORLD_WIDTH = 3000;
  
  // Input handlers
  const handleKeyDown = useCallback((e) => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") setKeys(k => ({ ...k, left: true }));
    if (e.code === "ArrowRight" || e.code === "KeyD") setKeys(k => ({ ...k, right: true }));
    if (e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space") {
      e.preventDefault();
      setKeys(k => ({ ...k, jump: true }));
    }
    if (e.code === "ShiftLeft" || e.code === "ShiftRight" || e.code === "KeyS") {
      e.preventDefault();
      setKeys(k => ({ ...k, pounce: true }));
    }
    if (e.code === "Escape") togglePause();
  }, []);
  
  const handleKeyUp = useCallback((e) => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") setKeys(k => ({ ...k, left: false }));
    if (e.code === "ArrowRight" || e.code === "KeyD") setKeys(k => ({ ...k, right: false }));
    if (e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space") setKeys(k => ({ ...k, jump: false }));
    if (e.code === "ShiftLeft" || e.code === "ShiftRight" || e.code === "KeyS") setKeys(k => ({ ...k, pounce: false }));
  }, []);
  
  const handleTouchLeft = useCallback((pressed) => setKeys(k => ({ ...k, left: pressed })), []);
  const handleTouchRight = useCallback((pressed) => setKeys(k => ({ ...k, right: pressed })), []);
  const handleTouchJump = useCallback((pressed) => setKeys(k => ({ ...k, jump: pressed })), []);
  const handleTouchPounce = useCallback((pressed) => setKeys(k => ({ ...k, pounce: pressed })), []);
  
  const togglePause = useCallback(() => {
    setGameState(prev => prev === "playing" ? "paused" : "playing");
  }, []);
  
  const resumeGame = useCallback(() => setGameState("playing"), []);
  
  const restartGame = useCallback(() => {
    setScore(0);
    setLives(3);
    setLevel(1);
    setCatPos({ x: 100, y: 300 });
    setCatVel({ x: 0, y: 0 });
    setCatFrame(0);
    setCatDirection(1);
    setCatState("idle");
    setCameraX(0);
    setKeys({ left: false, right: false, jump: false, pounce: false });
    initLevel(1);
    setGameState("playing");
  }, []);
  
  // Initialize level
  const initLevel = useCallback((lvl) => {
    const newMice = [];
    const newCheeses = [];
    const newPlatforms = [];
    
    // Ground platform
    for (let i = 0; i < WORLD_WIDTH / 64; i++) {
      newPlatforms.push({
        x: i * 64,
        y: GROUND_Y,
        width: 64,
        height: 16,
        type: "ground"
      });
    }
    
    // Floating platforms
    const platformCount = 5 + lvl * 2;
    for (let i = 0; i < platformCount; i++) {
      const x = 200 + i * (WORLD_WIDTH / platformCount) + Math.random() * 100 - 50;
      const y = 200 + Math.random() * 150;
      newPlatforms.push({
        x,
        y,
        width: 96 + Math.random() * 64,
        height: 16,
        type: "floating"
      });
    }
    
    // Mice
    const mouseCount = 3 + lvl;
    for (let i = 0; i < mouseCount; i++) {
      const platform = newPlatforms[Math.floor(Math.random() * newPlatforms.length)];
      newMice.push({
        x: platform.x + Math.random() * (platform.width - MOUSE_WIDTH),
        y: platform.y - MOUSE_HEIGHT,
        width: MOUSE_WIDTH,
        height: MOUSE_HEIGHT,
        velX: (Math.random() - 0.5) * 2,
        frame: 0,
        direction: Math.random() > 0.5 ? 1 : -1,
        state: "idle",
        patrolLeft: platform.x,
        patrolRight: platform.x + platform.width - MOUSE_WIDTH,
        caught: false
      });
    }
    
    // Cheeses
    const cheeseCount = 2 + lvl;
    for (let i = 0; i < cheeseCount; i++) {
      const platform = newPlatforms[Math.floor(Math.random() * newPlatforms.length)];
      newCheeses.push({
        x: platform.x + Math.random() * (platform.width - 32),
        y: platform.y - 48,
        width: 32,
        height: 32,
        collected: false,
        bobOffset: Math.random() * Math.PI * 2
      });
    }
    
    setMice(newMice);
    setCheeses(newCheeses);
    setPlatforms(newPlatforms);
    setParticles([]);
  }, []);
  
  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return;
    
    let animationId;
    let lastTime = 0;
    let frameCounter = 0;
    
    const gameLoop = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      frameCounter++;
      
      // Update cat
      setCatPos(prevPos => {
        let newX = prevPos.x;
        let newY = prevPos.y;
        let newVelX = catVel.x;
        let newVelY = catVel.y + GRAVITY;
        let newDirection = catDirection;
        let newState = "idle";
        let onGround = false;
        
        // Horizontal movement
        if (keys.left) {
          newVelX = Math.max(newVelX - 0.5, -MAX_SPEED);
          newDirection = -1;
          newState = "walk";
        } else if (keys.right) {
          newVelX = Math.min(newVelX + 0.5, MAX_SPEED);
          newDirection = 1;
          newState = "walk";
        } else {
          // Friction
          newVelX *= 0.85;
          if (Math.abs(newVelX) < 0.1) newVelX = 0;
        }
        
        // Jump
        if (keys.jump) {
          // Check if on ground/platform
          platforms.forEach(p => {
            if (prevPos.x + CAT_WIDTH > p.x && 
                prevPos.x < p.x + p.width &&
                prevPos.y + CAT_HEIGHT >= p.y - 5 &&
                prevPos.y + CAT_HEIGHT <= p.y + 5 &&
                newVelY >= 0) {
              onGround = true;
            }
          });
          
          if (prevPos.y + CAT_HEIGHT >= GROUND_Y - 5) onGround = true;
          
          if (onGround && newVelY >= 0) {
            newVelY = JUMP_FORCE;
          }
        }
        
        // Pounce
        if (keys.pounce && catState !== "pounce") {
          newState = "pounce";
          newVelX = newDirection * POUNCE_SPEED;
          newVelY = JUMP_FORCE * 0.7;
        }
        
        // Apply velocity
        newX += newVelX;
        newY += newVelY;
        
        // Clamp to world bounds
        newX = Math.max(0, Math.min(newX, WORLD_WIDTH - CAT_WIDTH));
        
        // Ground collision
        if (newY + CAT_HEIGHT >= GROUND_Y) {
          newY = GROUND_Y - CAT_HEIGHT;
          newVelY = 0;
          onGround = true;
        }
        
        // Platform collision
        platforms.forEach(p => {
          if (newX + CAT_WIDTH > p.x && 
              newX < p.x + p.width &&
              newY + CAT_HEIGHT > p.y &&
              newY + CAT_HEIGHT < p.y + p.height + 20 &&
              newVelY >= 0 &&
              prevPos.y + CAT_HEIGHT <= p.y + 10) {
            newY = p.y - CAT_HEIGHT;
            newVelY = 0;
            onGround = true;
          }
          
          // Ceiling collision
          if (newX + CAT_WIDTH > p.x && 
              newX < p.x + p.width &&
              newY < p.y + p.height &&
              newY > p.y - 20 &&
              newVelY < 0) {
            newY = p.y + p.height;
            newVelY = 0;
          }
          
          // Side collisions
          if (newY + CAT_HEIGHT > p.y && newY < p.y + p.height) {
            if (newX + CAT_WIDTH > p.x && prevPos.x + CAT_WIDTH <= p.x && newVelX > 0) {
              newX = p.x - CAT_WIDTH;
              newVelX = 0;
            }
            if (newX < p.x + p.width && prevPos.x >= p.x + p.width && newVelX < 0) {
              newX = p.x + p.width;
              newVelX = 0;
            }
          }
        });
        
        setCatVel({ x: newVelX, y: newVelY });
        setCatDirection(newDirection);
        setCatState(onGround ? newState : (newVelY < 0 ? "jump" : "fall"));
        
        return { x: newX, y: newY };
      });
      
      // Update camera - follow cat with smooth lerp
      setCameraX(prev => prev + (catPos.x - prev - 400) * 0.1);
      
      // Animation frame counter
      if (frameCounter % 8 === 0) {
        setCatFrame(prev => (prev + 1) % 4);
      }
      
      // Update mice
      setMice(prevMice => prevMice.map(mouse => {
        if (mouse.caught) return mouse;
        
        let newMouse = { ...mouse };
        newMouse.frame = (mouse.frame + 0.2) % 3;
        
        // Patrol behavior
        if (mouse.state === "idle" || mouse.state === "walk") {
          newMouse.x += mouse.velX;
          
          if (newMouse.x <= mouse.patrolLeft) {
            newMouse.x = mouse.patrolLeft;
            newMouse.velX = Math.abs(mouse.velX);
            newMouse.direction = 1;
            newMouse.state = "walk";
          } else if (newMouse.x >= mouse.patrolRight) {
            newMouse.x = mouse.patrolRight;
            newMouse.velX = -Math.abs(mouse.velX);
            newMouse.direction = -1;
            newMouse.state = "walk";
          }
          
          // Randomly pause
          if (Math.random() < 0.005) {
            newMouse.velX = 0;
            newMouse.state = "idle";
            setTimeout(() => {
              setMice(m => m.map(m => m === mouse ? { ...m, velX: (Math.random() - 0.5) * 2, state: "walk" } : m));
            }, 1000 + Math.random() * 2000);
          }
        }
        
        // Flee from cat when close
        const distToCat = Math.abs(catPos.x - newMouse.x);
        if (distToCat < 200 && catState === "pounce") {
          const fleeDir = newMouse.x > catPos.x ? 1 : -1;
          newMouse.velX = fleeDir * 5;
          newMouse.direction = fleeDir;
          newMouse.state = "run";
        }
        
        return newMouse;
      }));
      
      // Check cat-mouse collisions (pounce)
      setMice(prevMice => prevMice.map(mouse => {
        if (mouse.caught) return mouse;
        
        const catBox = {
          left: catPos.x,
          right: catPos.x + CAT_WIDTH,
          top: catPos.y,
          bottom: catPos.y + CAT_HEIGHT
        };
        
        const mouseBox = {
          left: mouse.x,
          right: mouse.x + mouse.width,
          top: mouse.y,
          bottom: mouse.y + mouse.height
        };
        
        const colliding = catBox.left < mouseBox.right &&
                         catBox.right > mouseBox.left &&
                         catBox.top < mouseBox.bottom &&
                         catBox.bottom > mouseBox.top;
        
        if (colliding && catState === "pounce") {
          // Add score particles
          setParticles(prev => [...prev, {
            x: mouse.x + mouse.width / 2,
            y: mouse.y + mouse.height / 2,
            type: "score",
            value: 100,
            life: 60,
            velY: -2
          }]);
          
          setScore(s => s + 100);
          return { ...mouse, caught: true };
        }
        
        // Hurt cat on contact (not pouncing)
        if (colliding && catState !== "pounce") {
          setLives(l => {
            const newLives = l - 1;
            if (newLives <= 0) {
              setTimeout(() => setGameState("gameOver"), 500);
            }
            return newLives;
          });
          
          // Knockback
          setCatVel(v => ({ x: v.x * -0.5, y: JUMP_FORCE * 0.5 }));
          
          // Invincibility frames could be added here
        }
        
        return mouse;
      }));
      
      // Check cheese collection
      setCheeses(prevCheeses => prevCheeses.map(cheese => {
        if (cheese.collected) return cheese;
        
        const catBox = {
          left: catPos.x,
          right: catPos.x + CAT_WIDTH,
          top: catPos.y,
          bottom: catPos.y + CAT_HEIGHT
        };
        
        const cheeseBox = {
          left: cheese.x,
          right: cheese.x + cheese.width,
          top: cheese.y,
          bottom: cheese.y + cheese.height
        };
        
        const colliding = catBox.left < cheeseBox.right &&
                         catBox.right > cheeseBox.left &&
                         catBox.top < cheeseBox.bottom &&
                         catBox.bottom > cheeseBox.top;
        
        if (colliding) {
          setParticles(prev => [...prev, {
            x: cheese.x + cheese.width / 2,
            y: cheese.y + cheese.height / 2,
            type: "cheese",
            value: 50,
            life: 60,
            velY: -2
          }]);
          
          setScore(s => s + 50);
          return { ...cheese, collected: true };
        }
        
        return cheese;
      }));
      
      // Update particles
      setParticles(prev => prev
        .map(p => ({ ...p, life: p.life - 1, y: p.y + p.velY, velY: p.velY + 0.1 }))
        .filter(p => p.life > 0)
      );
      
      // Check level completion
      const activeMice = mice.filter(m => !m.caught).length;
      if (activeMice === 0 && mice.length > 0) {
        setTimeout(() => {
          setLevel(l => l + 1);
          initLevel(level + 1);
        }, 1000);
      }
      
      animationId = requestAnimationFrame(gameLoop);
    };
    
    animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, [gameState, keys, catPos, catVel, catState, catDirection, mice, platforms, level, initLevel]);
  
  // Initialize first level
  useEffect(() => {
    initLevel(1);
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp, initLevel]);
  
  // Select cat sprite based on state
  const getCatSprite = () => {
    switch (catState) {
      case "walk":
        return catFrame < 2 ? catWalk1 : catWalk2;
      case "pounce":
        return catPounce;
      case "jump":
      case "fall":
        return catPounce; // Use pounce sprite for air
      default:
        return catIdle;
    }
  };
  
  const getMouseSprite = (mouse) => {
    if (mouse.caught) return mouseIdle; // Could add caught sprite
    if (mouse.state === "run") return mouse.frame < 1.5 ? mouseRun1 : mouseRun2;
    if (mouse.state === "walk") return mouse.frame < 1.5 ? mouseRun1 : mouseRun2;
    return mouseIdle;
  };
  
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
  return (
    <div className="cat-mouse-game" ref={gameContainerRef}>
      <GameUI
        score={score}
        lives={lives}
        level={level}
        paused={gameState === "paused"}
        gameOver={gameState === "gameOver"}
        onPause={togglePause}
        onResume={resumeGame}
        onRestart={restartGame}
      />
      
      <div className="game-world" style={{ transform: `translateX(${-cameraX}px)` }}>
        {/* Background layers */}
        <div className="game-background">
          {/* Sky gradient */}
          <div className="sky-gradient" />
          
          {/* Far clouds */}
          <ParallaxLayer speed={0.1}>
            {Array.from({ length: 8 }, (_, i) => (
              <PixelSprite
                key={`cloud-far-${i}`}
                grid={cloud}
                px={3}
                className="bg-cloud"
                style={{ left: `${i * 400 + (i * 123) % 200}px`, top: `${50 + (i * 73) % 150}px` }}
              />
            ))}
          </ParallaxLayer>
          
          {/* Mid clouds */}
          <ParallaxLayer speed={0.3}>
            {Array.from({ length: 6 }, (_, i) => (
              <PixelSprite
                key={`cloud-mid-${i}`}
                grid={cloud}
                px={4}
                className="bg-cloud"
                style={{ left: `${i * 500 + (i * 456) % 300}px`, top: `${100 + (i * 234) % 100}px` }}
              />
            ))}
          </ParallaxLayer>
          
          {/* Trees */}
          <ParallaxLayer speed={0.5}>
            {Array.from({ length: 12 }, (_, i) => (
              <PixelSprite
                key={`tree-${i}`}
                grid={tree}
                px={2}
                className="bg-tree"
                style={{ left: `${i * 250 + (i * 789) % 150}px`, bottom: "16px" }}
              />
            ))}
          </ParallaxLayer>
        </div>
        
        {/* Platforms */}
        <div className="game-platforms">
          {platforms.map((platform, i) => (
            <div
              key={`platform-${i}`}
              className="platform"
              style={{
                left: platform.x,
                top: platform.y,
                width: platform.width,
                height: platform.height,
              }}
            >
              {/* Top surface */}
              <PixelSprite
                grid={platformTop}
                px={1}
                className="platform-top"
                style={{ width: platform.width, height: 16 }}
              />
              {/* Front face for 3D effect */}
              <PixelSprite
                grid={platformFront}
                px={1}
                className="platform-front"
                style={{ width: platform.width, height: platform.height, top: 16 }}
              />
            </div>
          ))}
        </div>
        
        {/* Cheeses */}
        <div className="game-cheeses">
          {cheeses.map((cheese, i) => (
            !cheese.collected && (
              <div
                key={`cheese-${i}`}
                className="cheese"
                style={{
                  left: cheese.x,
                  top: cheese.y + Math.sin(Date.now() / 300 + cheese.bobOffset) * 4,
                }}
              >
                <PixelSprite grid={cheese} px={3} />
              </div>
            )
          ))}
        </div>
        
        {/* Mice */}
        <div className="game-mice">
          {mice.map((mouse, i) => (
            <div
              key={`mouse-${i}`}
              className="mouse"
              style={{
                left: mouse.x,
                top: mouse.y,
                transform: `scaleX(${mouse.direction})`,
                opacity: mouse.caught ? 0.3 : 1,
                transition: mouse.caught ? "opacity 0.5s ease-out" : "none",
              }}
            >
              <PixelSprite grid={getMouseSprite(mouse)} px={3} flip={mouse.direction === -1} />
              {!mouse.caught && (
                <div className="mouse-squeak" style={{ animationDelay: `${i * 200}ms` }}>
                  <span>💬</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Cat */}
        <div
          className="cat-player"
          style={{
            left: catPos.x,
            top: catPos.y,
            transform: `scaleX(${catDirection})`,
            filter: catState === "pounce" ? "drop-shadow(0 0 8px #f0944a)" : "none",
          }}
        >
          <PixelSprite grid={getCatSprite()} px={3} flip={catDirection === -1} />
        </div>
        
        {/* Particles */}
        <div className="game-particles">
          {particles.map((particle, i) => (
            <div
              key={`particle-${i}`}
              className={`particle particle-${particle.type}`}
              style={{
                left: particle.x - cameraX,
                top: particle.y,
                opacity: particle.life / 60,
                transform: `translateY(${60 - particle.life}px)`,
              }}
            >
              {particle.type === "score" && `+${particle.value}`}
              {particle.type === "cheese" && `+${particle.value} 🧀`}
            </div>
          ))}
        </div>
      </div>
      
      {isMobile && (
        <TouchControls
          onLeft={handleTouchLeft}
          onRight={handleTouchRight}
          onJump={handleTouchJump}
          onPounce={handleTouchPounce}
        />
      )}
      
      <div className="game-controls-hint">
        <kbd>←</kbd><kbd>→</kbd> Move &nbsp;
        <kbd>↑</kbd><kbd>Space</kbd> Jump &nbsp;
        <kbd>Shift</kbd><kbd>S</kbd> Pounce &nbsp;
        <kbd>Esc</kbd> Pause
      </div>
    </div>
  );
}