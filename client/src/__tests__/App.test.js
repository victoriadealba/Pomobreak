import Enzyme, { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { act } from 'react-dom/test-utils';

configure({adapter: new Adapter() });

it('Renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Start Button Test: Renders as Start', () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find('#start-stop');
    expect(startButton.text()).toEqual('Start');
})

it('Start Button Test: Renders as Stop After Click', () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find('#start-stop');
    startButton.simulate('click');
    expect(startButton.text()).toEqual('Stop');
})

it('Reset Button Test: Renders as Reset', () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find('#reset-button');
    expect(startButton.text()).toEqual('Reset');
})

it('Timer Label Test: Renders as Session', () => {
    const wrapper = mount(<App />);
    const label = wrapper.find('#timer-label');
    expect(label.text()).toEqual('PomoSession');
})

it('Timer Label Test: Renders as Break After Working Session', () => {
    const wrapper = mount(<App />);
    const timerLabel = wrapper.find('#timer-label');
    const startButton = wrapper.find('#start-stop');
    jest.useFakeTimers();
    startButton.simulate('click');
    act(() => {
        jest.advanceTimersByTime(100 * 60 * 26); // <= CHANGE ME TO 1000 WHEN REVERTING TO NORMAL TIMER
    })
    jest.useRealTimers();
    expect(timerLabel.text()).toEqual('Break');
})

it('Timer Label Test: Renders as Session After Working Session & Break', () => {
    const wrapper = mount(<App />);
    const timerLabel = wrapper.find('#timer-label');
    const startButton = wrapper.find('#start-stop');
    jest.useFakeTimers();
    startButton.simulate('click');
    act(() => {
        jest.advanceTimersByTime(100 * 60 * 26 + 100 * 60 * 6); // <= CHANGE ME TO 1000 WHEN REVERTING TO NORMAL TIMER
    })
    jest.useRealTimers();
    expect(timerLabel.text()).toEqual('Session');
})

it('Session Length Test: Defaults to 25:00', () => {
    const wrapper = mount(<App />);
    const label = wrapper.find('#session-length');
    expect(label.text()).toEqual('25:00 ');
})

it('Session Length Test: Can Decrease and Increase Timer', () => {
    const wrapper = mount(<App />);
    const label = wrapper.find('#session-length');
    const decButton = wrapper.find('#session-reduce');
    const incButton = wrapper.find('#session-increase');
    decButton.simulate('click');
    expect(label.text()).toEqual('24:00 ');
    incButton.simulate('click');
    incButton.simulate('click');
    expect(label.text()).toEqual('26:00 ');
})

it('Session Length Test: Session Doesn\'t Allow Negative Value', () => {
    const wrapper = mount(<App />);
    const label = wrapper.find('#session-length');
    const decButton = wrapper.find('#session-reduce');
    for(let i = 0; i < 30; i++) {
        decButton.simulate('click');
    }
    expect(label.text()).toEqual('1:00 ');
})

it('Timer Test: Defaults to 25:00', () => {
    const wrapper = mount(<App />);
    const label = wrapper.find('#time-left');
    expect(label.text()).toEqual('25:00');
})

it('Timer Test: Minutes Decrement after 60 seconds', () => {
    const wrapper = mount(<App />);
    const time = wrapper.find('#time-left');
    const startButton = wrapper.find('#start-stop');
    jest.useFakeTimers();
    startButton.simulate('click');
    act(() => {
        jest.advanceTimersByTime(1000 * 60);
    })
    jest.useRealTimers();
    expect(time.text()).toEqual('24:00');
})

it('Timer Test: Timer Equals Break Length After Working Session', () => {
    const wrapper = mount(<App />);
    const time = wrapper.find('#time-left');
    const startButton = wrapper.find('#start-stop');
    const breakLength = wrapper.find('#break-length');
    jest.useFakeTimers();
    startButton.simulate('click');
    act(() => {
        jest.advanceTimersByTime(1000 * 60 * 26);
    })
    jest.useRealTimers();
    expect(time.text() + " ").toEqual(breakLength.text());
})