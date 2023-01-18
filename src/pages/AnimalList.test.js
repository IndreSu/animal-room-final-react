import { render, screen } from "@testing-library/react";
import { AnimalListPage } from "./AnimalList";

test("Änimal List initial render", () => {
  render(<AnimalListPage />);
  const title = screen.getByText("Animals");
  expect(title).toBeDefined;
});
