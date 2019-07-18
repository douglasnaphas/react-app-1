/* How does something like:

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}

work?

Particularly, the task: {id, title, state}. Is that a nested destructuring,
or some kind of type specification? */

import React from "react";

export default function CompWDesProps({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div>
      <h3>With some destructured props</h3>
      <p>
        task.id: {id}, task.title: {title}, task.state: {state}
      </p>
    </div>
  );
}

/* The above is nested destructuring:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Nested_object_and_array_destructuring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter
*/
