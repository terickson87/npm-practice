import app from "../src/app"


describe('app', () => {
    test('Works', () => {
        const result = app()
        expect(result).toBe(`{"data":"Hello World"}`)
    })
})