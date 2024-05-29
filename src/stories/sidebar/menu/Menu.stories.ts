import { Meta, StoryObj } from "@storybook/react"
import Menu from "./Menu"

const meta = {
  title: "Example/SideMenu",
  component: Menu,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: { control: "text" },
    link: { control: "text" },
    icon: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { name: "", link: "", icon: "" },
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: "홈",
    link: "/",
    icon: "",
  },
}
