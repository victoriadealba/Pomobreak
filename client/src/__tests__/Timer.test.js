import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Timer from '../components/Timer';
import { act } from 'react-dom/test-utils';

it("Timer element renders with text", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
        render(<Timer timerLabel="Pomo" timeLeft ="1500" startButtonLabel = "start"/>, container)
    });
    expect(container).toMatchSnapshot();
});