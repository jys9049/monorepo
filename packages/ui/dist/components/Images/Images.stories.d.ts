import type { StoryObj } from "@storybook/react-webpack5";
declare const meta: {
    title: string;
    component: ({ baseUrl, images, className: defaultClassName, }: import("./types").ImageProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
