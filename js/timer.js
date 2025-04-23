/** @type {number} */
const ENCOMPASSING_DIAMETER = 102;
/** @type {number} */
const ENCOMPASSING_RADIUS = ENCOMPASSING_DIAMETER / 2;

/** @type {number} */
const RIM_RADIUS = 50;
/** @type {number} */
const RIM_STROKE_WIDTH = 1;

/** @type {number} */
const CIRCLE_RADIUS = 44;

/** @type {number} */
const CIRCUMFERENCE = CIRCLE_RADIUS * Math.PI;

/** @type {HTMLDivElement} */
const TIMERS = document.querySelector(".timers");



class Timer {
  /** @type {number} */
  time_elapsed = 25;
  /** @type {number} */
  total_time = 100;
  /** @type {number} */
  timestamp = 0;

  /** @type {HTMLDivElement} */
  element = document.createElement("div");

  /** @type {HTMLInputElement} */
  elem_name = document.createElement("input");

  /** @type {SVGCircleElement} */
  elem_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  /** @type {HTMLDivElement} */
  elem_setters = document.createElement("div");

  /** @type {HTMLInputElement} */
  elem_hour_setter = document.createElement("input");
  
  /** @type {HTMLInputElement} */
  elem_minute_setter = document.createElement("input");
  
  /** @type {HTMLInputElement} */
  elem_second_setter = document.createElement("input");



  constructor() {
    /** @type {SVGElement} */
    const elem_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    /** @type {SVGCircleElement} */
    const elem_rim = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    this.element.classList.add("timer");

    this.elem_name.classList.add("name");
    this.elem_name.type = "text";
    this.elem_name.placeholder = "timer.";
    this.element.append(this.elem_name);

    elem_svg.classList.add("circle");
    elem_svg.setAttributeNS(null, "width", `${ENCOMPASSING_DIAMETER}`);
    elem_svg.setAttributeNS(null, "height", `${ENCOMPASSING_DIAMETER}`);
    this.element.append(elem_svg);

    elem_rim.classList.add("__rim");
    elem_rim.setAttributeNS(null, "stroke", "currentColor");
    elem_rim.setAttributeNS(null, "stroke-width", `${RIM_STROKE_WIDTH}`);
    elem_rim.setAttributeNS(null, "fill", "transparent");
    elem_rim.setAttributeNS(null, "r", `${RIM_RADIUS}`);
    elem_rim.setAttributeNS(null, "cx", `${ENCOMPASSING_RADIUS}`);
    elem_rim.setAttributeNS(null, "cy", `${ENCOMPASSING_RADIUS}`);
    elem_svg.append(elem_rim);

    this.elem_circle.classList.add("__circle");
    this.elem_circle.setAttributeNS(null, "stroke", "currentColor");
    this.elem_circle.setAttributeNS(null, "stroke-width", `${CIRCLE_RADIUS}`);
    this.elem_circle.setAttributeNS(null, "fill", "transparent");
    this.elem_circle.setAttributeNS(null, "r", `${CIRCLE_RADIUS/2}`);
    this.elem_circle.setAttributeNS(null, "cx", `${ENCOMPASSING_RADIUS}`);
    this.elem_circle.setAttributeNS(null, "cy", `${ENCOMPASSING_RADIUS}`);
    elem_svg.append(this.elem_circle);
  }


  /** @returns {number} */
  getPercentElapsed() {
    return (this.time_elapsed / this.total_time) * 100;
  }

  /** @returns {number} */
  getPercentRemaining() {
    return 100 - this.getPercentElapsed();
  }

  getHours() {
  }
  
  /** Removes element from existence. @returns {void} */
  remove() {
  }
}