# AstroStudioStart



## 📘 **Component Props Documentation**

This documentation provides an overview of the **props** that can be used in the various components within this project. Each component is described with its name, a brief description, and a list of the available props.

---

### **📦 Components**

---

### 🔹 **Button**
A reusable button component with multiple variants and functionalities.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `label`      | `string`      | `null`     | The text displayed on the button. |
| `onClick`    | `function`    | `null`     | Callback function triggered on click. |
| `variant`    | `'primary' | 'secondary' | 'danger'` | `'primary'` | The style variant of the button. |
| `disabled`   | `boolean`     | `false`    | Disables the button when `true`. |
| `icon`       | `JSX.Element` | `null`     | An optional icon displayed inside the button. |

---

### 🔹 **Card**
A component for displaying content in a card-like layout.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `title`      | `string`      | `null`     | The title displayed at the top of the card. |
| `image`      | `string`      | `null`     | The URL of an image displayed at the top of the card. |
| `content`    | `string`      | `null`     | The main content of the card. |
| `link`       | `string`      | `null`     | The URL for the "read more" button or link within the card. |
| `onClick`    | `function`    | `null`     | Optional function called when the card is clicked. |

---

### 🔹 **Modal**
A modal window that is displayed over the page content.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `isOpen`     | `boolean`     | `false`    | Determines if the modal is visible. |
| `onClose`    | `function`    | `null`     | Callback function triggered when the modal is closed. |
| `title`      | `string`      | `null`     | The title displayed at the top of the modal. |
| `children`   | `JSX.Element` | `null`     | Content displayed inside the modal. |
| `size`       | `'small' | 'medium' | 'large'` | `'medium'` | The size of the modal. |

---

### 🔹 **InputField**
A reusable input field component.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `name`       | `string`      | `''`       | The name of the input field (important for forms). |
| `type`       | `'text' | 'password' | 'email' | 'number'` | `'text'` | The type of the input field. |
| `value`      | `string | number` | `''`     | The value contained in the input field. |
| `onChange`   | `function`    | `null`     | Callback function triggered on value change. |
| `placeholder`| `string`      | `''`       | The placeholder text displayed in the field. |
| `disabled`   | `boolean`     | `false`    | Disables the input field when `true`. |
| `error`      | `string`      | `null`     | Optional error message displayed below the input field. |

---

### 🔹 **Toast**
A notification component that appears with a message.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `message`    | `string`      | `null`     | The text displayed in the toast. |
| `type`       | `'success' | 'error' | 'info' | 'warning'` | `'info'` | The type of toast message. |
| `duration`   | `number`      | `3000`     | The duration (in milliseconds) that the toast remains visible. |
| `onClose`    | `function`    | `null`     | Callback function triggered when the toast closes. |

---

### 🔹 **Avatar**
A simple avatar component displaying an image or initials.

#### **Props**
| Prop         | Type          | Default    | Description                          |
|--------------|---------------|------------|--------------------------------------|
| `src`        | `string`      | `null`     | The URL of the image to be displayed as an avatar. |
| `alt`        | `string`      | `''`       | Alternate text displayed if the image cannot be loaded. |
| `size`       | `number`      | `40`       | The width/height of the avatar in pixels. |
| `initials`   | `string`      | `''`       | Initials displayed if no image is provided. |


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
