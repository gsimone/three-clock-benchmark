const b = require("benny");
const { Clock } = require("three");
const { Clock: ClockClass } = require('./implemenations/Clock.class.js');
const { Clock: ClockModule } = require('./implemenations/Clock.module.js');

b.suite(
  "Clock",
  b.add("baseline", () => {
    const clock = new Clock()
    clock.start()
    return () => clock.getElapsedTime()
  }),
  b.add("class", () => {
    const clock = new ClockClass()
    clock.start()
    return () => clock.getElapsedTime()
  }),
  b.add("module", () => {
    const clock = new ClockModule()
    clock.start()
    return () => clock.getElapsedTime()
  }),
  b.cycle(),
  b.complete(),
  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' })
);
