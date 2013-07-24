hideme.js
=========

Really simple jQuery plugin to aid in hiding DOM elements after a certain amount of time (such as a notice after successfully submitting a form).

###Example usage:

```javascript
$('#selector').hideme({ delay: 1000, effect: "slideUp", speed: 800 });
```

###Arguments:

delay (int): Sets the delay before element hideme is triggered. (Default: 2000)

effect (string): Desired effect to trigger. (current options are ```slideUp```, ```fadeOut``` and ```hide``` (Default: fadeOut)

speed (int) : Speed of the chosen effect. (Default: 800)
