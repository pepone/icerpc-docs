---
title: Doc comments
description: Learn how to write doc comments in Slice.
---

## Purpose of doc comments

Slice comments that start with `///` are doc comments. The Slice compiler uses these Slice doc comments as input for the
doc comments it generates in the mapped language.

Future tools may use these doc comments for additional purposes, for example to show tool tips when editing Slice files
with Visual Studio code.

## Documentable definitions

Slice doc comments can be attached to all Slice definitions except encoding, modules, parameters and typealias.

## Doc comments tags

Slice doc comments support the following tags:

| Tag                           | Applies to       | Description                                                    |
|-------------------------------|----------------- |----------------------------------------------------------------|
| `{@link ... }`                | All doc comments | Provide a link to another Slice definition.                    |
| `@param name:`                | Operations       | Describe the operation parameter `name`.                       |
| `@return name:`               | Operations       | Describe the return parameter `name`.                          |
| `@see`                        | All doc comments | Suggest to see another Slice definition.                       |
| `@throws:`                    | Operations       | Describe when the operation throws the listed Slice exception. |

For example:

```slice
module Example

/// Represents a factory for widgets.
/// @see Widget
interface WidgetFactory {
    /// Creates a new {@link Widget}.
    /// @param name: The name of the new widget.
    /// @param color: The color of the new widget.
    /// @returns: A proxy to the new widget.
    /// @throws WidgetException: Thrown if the factory could not create the widget.
    createWidget(name: string) -> Widget throws WidgetException

    /// Retrieves the last {@link Widget} created by this factory.
    /// @returns proxy: A proxy to the last widget.
    /// @returns timeStamp: The creation time stamp.
    /// @throws WidgetException: Thrown if the factory has not created any widget yet.
    getLastWidget() -> (proxy: Widget, timeStamp: TimeStamp) throws WidgetException
}
```