import React from "react";
import { create } from "react-test-renderer";
import Search from "../Components/search";
import GifContainer from "../Components/gifContainer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement("ul");
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
});

describe("Search Component", () => {
	test("Matches the snapshot", () => {
		const button = create(<Search />);
		expect(button.toJSON()).toMatchSnapshot();
	});

	it("renders list of Gif", async () => {
		const fakeUser = {
			name: "Joni Baez",
			age: "32",
			address: "123, Charming Avenue",
		};

		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(fakeUser),
			})
		);

		// Use the asynchronous version of act to apply resolved promises
		await act(async () => {
			render(<GifContainer items={[]} />, container);
		});

		// expect(container.querySelector("Joni Baez").textContent).toBe(fakeUser.name);

		// remove the mock to ensure tests are completely isolated
		global.fetch.mockRestore();
	});
});
