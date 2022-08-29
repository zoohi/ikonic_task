/** @format */

const { default: axios } = require("axios");
const expect = require("chai").expect;

describe("Testing the Question Functions", function () {
  it("Save new question", async function () {
    let response = await axios.post("http://localhost:8000/api/question", {
      question: "test question",
      options: [
        {
          id: 0,
          option: "test option 0",
        },
        {
          id: 1,
          option: "test option 1",
        },
      ],
      answer: 0,
    });

    expect(response.data.data.question).to.equal("test question");
    expect(response.data.data.options[0].option).to.equal("test option 0");
    expect(response.data.data.answer).to.equal("0");
  });
});
