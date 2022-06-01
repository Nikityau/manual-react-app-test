import React from "react";

import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from "./App";

describe("APP TEST", () => {
    test('Appear', () => {
        render(<App/>)

        expect(screen.getByTestId('app-js')).toBeInTheDocument()
    })
})