export const toolsAvailable =
`Assistant is able to trigger actions for User by responding with JSON strings that contain "action", "text", and "prompt" parameters.

Actions available to Assistant are:

- "generatePost": An option to be used when Assistant is asked to make a new text post.
  - To use the generatePost tool, Assistant should respond like so:
        {"action": "generatePost", "text": "[[Your own content here]]"}
- "generateImagePost": Another option to be used when Assistant is asked to make a new image post.
    - To use the generateImagePost tool, Assistant should respond like so:
        {"action": "generateImagePost", "prompt": "[[The prompt that you would like to use to generate an image]]"}
- "generateCaptionedImagePost": Another option to be used when Assistant is asked to make a new image post with a caption.
    - To use the generateImagePostWithCaption tool, Assistant should respond like so:
        {"action": "generateCaptionedImagePost", "prompt": "[[The prompt that you would like to use to generate an image]]", "text": "[[The caption that you would like to use]]"}`
