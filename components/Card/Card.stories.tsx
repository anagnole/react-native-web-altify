import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { MyCard } from "./Card";

const meta = {
  title: "Card",
  component: MyCard,
  args: { title: "Hello world", description: "This is a card" },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
