import React, { useState } from "react";
import {
    Box,
    Flex,
    TextArea,
    Select,
    Tabs,
    Text,
    Slider,
    Popover,
    Button,
} from "@radix-ui/themes";
import {
    EXPRESSIONES,
    GESTURES,
    SYMBOLS,
    FOOD,
    ACTIVITIES,
    PLACES,
    NATURE,
} from "../utils/emojis";

export function EmojiPicker() {

    const [value, setValue] = useState("");

    return (
        <Popover.Root>
            <Popover.Trigger>
                <Button variant="soft">{value || "Select Emoji"}</Button>
            </Popover.Trigger>
            <Popover.Content>
                <Tabs.Root defaultValue="expressiones">
                    <Tabs.List>
                        <Tabs.Trigger value="expressiones">Expressiones</Tabs.Trigger>
                        <Tabs.Trigger value="gestures">Gestures</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="expressiones">
                            {EXPRESSIONES.map((emoji) => (
                                <Button
                                    key={emoji}
                                    variant="ghost"
                                    style={{ fontSize: "1.5rem" }}
                                    onClick={() => setValue(emoji)}
                                >
                                    {emoji}
                                </Button>
                            ))}
                        </Tabs.Content>

                        <Tabs.Content value="gestures">
                            {GESTURES.map((emoji) => (
                                <Button
                                    key={emoji}
                                    variant="ghost"
                                    style={{ fontSize: "1.5rem" }}
                                    onClick={() => setValue(emoji)}
                                >
                                    {emoji}
                                </Button>
                            ))}
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Popover.Content>
        </Popover.Root>
    );
}
