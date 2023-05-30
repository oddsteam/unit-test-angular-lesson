import { FormGroup } from "@angular/forms";
import { TodoService } from "src/app/services/todo.service";
import { TodoManageComponent } from "./todo-manage.component";

describe("TodoManageComponent", () => {
  let component;
  const mockTodoService = {};
  beforeEach(() => {
    component = new TodoManageComponent(mockTodoService as any as TodoService);
  });

  it("should create todo form instance of FormGroup", () => {
    expect(component.todoForm instanceof FormGroup).toBe(true);
  });
});
