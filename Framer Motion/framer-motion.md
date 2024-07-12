# Framer Motion
A library for adding complex animations to React apps.

## 'motion' component
Most important part of framer motion is the motion component. Through it animations can be applied to any HTML element. Simply prepend the component name with 'motion' and you can access some additional props.
```
<motion.div
    styles={{
        background: black;
        width: 100px;
        height: 100px;
    }}
>
<motion.div>
```

### Props
#### initial
initial prop defines the styles the component will have when it mounts.

#### animate
animate prop defines the styles that will be applied after the component is mounted.

#### transition
transition prop defines the affects such as duration, delay, type, ease e.t.c. of the animation.

#### exit
exit props defines the styles that will be applied when the component unmounts. 
For exit to work, you have to wrap the element inside an AnimatePresence tag. This stop the unmounting, applyes the styles and then unmounts the element.

#### varients
varients is a prop that takes an object which contains props with different effects that can be applied to elements.
```
const varients = {
    flip: {
        rotate: "360deg"
    }
    initial: {
        rotate: "0deg"
    }
    move: {
        x: 10
    }
}
```
It can be applied like this:
```
<motion.div
        varients={varients}
        initial="initial"
        animate="rotate"
      />
```

### Keyframes
All the props can have keyframe values. They can be applied by using an array with different values instead of a single value. 
If you want to use percentage values, you can add an attribute 'times' in transition prop. It will contain as many values as defined in the other keyframes and values will range from 0-1. 0 means start of the duration and 1 means end of the duration that you have set for the animation.

```
<AnimatePresence>
<motion.div
    styles={{
        background: black;
        width: 100px;
        height: 100px;
    }}
    initial={{
        rotate: 0,
        scale: 0,
    }}
    animate={{
        rotate: [0, 180, 360, 180, 0],
        scale: 1
    }}
    exit={{
        rotate: 0,
        scale: 0,
    }}
    transition={{
        duration: 1,
        delay: 0.2,
        type: 'spring',
        times: [0, 0.25, 0.5, 0.75, 1],
    }}
>
</motion.div>
</AnimatePresence>

```
## Gestures
Most commonly, we want to animate elements when we perfom some actions such as hovering over them and clicking them. 

### Props
#### whileHover
styles that will be applied when we hover over the element

#### whileTap
styles that will be applied when we click the element

### MotionConfig
Consider you have multiple elements and want to apply same transition effects to all of them. You can wrap the elements in MotionConfig component and add the transition prop to MotionConfig. It will apply the transition effect to all of its children.
```
  <MotionConfig transition={{ duration: 1 }}>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
  </MotionConfig>
```

## useAnimationControls
Consider you want to apply some animation to an element when you interact with some other element. useAnimationControls hook can be used for this purpose. This hook returns an object which can be used to change styles for the component. It can be used like:

```
const controls = useAnimationControls()

<button onClick={() => {
    controls.start({
        scale: 0.5
    })
}}></button>
<motion.div
        initial={{ opacity: 0 }}
        animate={controls}
      />
```
You will need to pass the control variable to the element's animate prop.
You can also use varients instead of directly passing object to controls.start. 