# TODO: Implement ScrollFloat for Section Titles

## Tasks
- [ ] Edit src/components/About.jsx: Import ScrollFloat and wrap "About Me" and "Skills" titles with ScrollFloat component
- [ ] Edit src/components/Works.jsx: Import ScrollFloat and wrap "My Works" title with ScrollFloat component
- [ ] Edit src/components/Contact.jsx: Import ScrollFloat and wrap "Leave a comment" title with ScrollFloat component
- [ ] Test the scroll float effect in the application

## Details
- Use ScrollFloat props: animationDuration={1}, ease='back.inOut(2)', scrollStart='center bottom+=50%', scrollEnd='bottom bottom-=40%', stagger={0.03}
- Replace motion.h2 elements with ScrollFloat to maintain h2 semantics
- Ensure ScrollFloat.css is applied correctly
