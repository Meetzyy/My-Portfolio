import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
    };

    let animationFrameId;
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateFollower();

    // Setup mutation observer to add hover effects to new elements dynamically
    const applyHoverEffects = () => {
      const hoverTargets = document.querySelectorAll('a, button, .bento-card, .project-card, .contact-card, .skill-tag, .hobby-tag');
      
      const onMouseEnter = () => follower && follower.classList.add('hover');
      const onMouseLeave = () => follower && follower.classList.remove('hover');

      hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        hoverTargets.forEach(el => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    };

    let cleanupHover = applyHoverEffects();
    const observer = new MutationObserver(() => {
      cleanupHover();
      cleanupHover = applyHoverEffects();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      cleanupHover();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor"></div>
      <div className="cursor-follower" ref={followerRef} id="cursorFollower"></div>
    </>
  );
};

export default CustomCursor;
