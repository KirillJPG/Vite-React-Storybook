import type {Meta, StoryObj} from "@storybook/react"
import { Timer } from "./Timer"
import "./timer.module.css"

const meta:Meta<typeof Timer> = {
    component:Timer,

}
export default meta
type Story = StoryObj<typeof Timer>
export const Primary:Story = {
    args:{}
}
