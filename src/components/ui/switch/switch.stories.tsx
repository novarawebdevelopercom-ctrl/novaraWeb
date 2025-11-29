import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Switch label"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        label="Switch label"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        label="Disabled switch"
        checked={checked}
        disabled
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    );
  },
};

export const WithLabels: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label="Switch label"
        onLabel="On"
        offLabel="Off"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [checkedPr, setCheckedPr] = useState(false);
    const [checkedSu, setCheckedSu] = useState(false);
    const [checkedWa, setCheckedWa] = useState(false);
    const [checkedEr, setCheckedEr] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Switch
          size="lg"
          label="primary"
          color="primary"
          checked={checkedPr}
          onChange={(e) => setCheckedPr(e.currentTarget.checked)}
        />
        <Switch
          size="lg"
          label="success"
          color="success"
          checked={checkedSu}
          onChange={(e) => setCheckedSu(e.currentTarget.checked)}
        />
        <Switch
          size="lg"
          label="Warning"
          color="warning"
          checked={checkedWa}
          onChange={(e) => setCheckedWa(e.currentTarget.checked)}
        />
        <Switch
          size="lg"
          label="Error"
          color="error"
          checked={checkedEr}
          onChange={(e) => setCheckedEr(e.currentTarget.checked)}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [checkedXs, setCheckedXs] = useState(false);
    const [checkedSm, setCheckedSm] = useState(false);
    const [checkedMd, setCheckedMd] = useState(false);
    const [checkedLg, setCheckedLg] = useState(false);
    const [checkedXl, setCheckedXl] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Switch
          size="xs"
          label="XS"
          checked={checkedXs}
          onChange={(e) => setCheckedXs(e.currentTarget.checked)}
        />
        <Switch
          size="sm"
          label="SM"
          checked={checkedSm}
          onChange={(e) => setCheckedSm(e.currentTarget.checked)}
        />
        <Switch
          size="md"
          label="MD"
          checked={checkedMd}
          onChange={(e) => setCheckedMd(e.currentTarget.checked)}
        />
        <Switch
          size="lg"
          label="LG"
          checked={checkedLg}
          onChange={(e) => setCheckedLg(e.currentTarget.checked)}
        />
        <Switch
          size="xl"
          label="XL"
          checked={checkedXl}
          onChange={(e) => setCheckedXl(e.currentTarget.checked)}
        />
      </div>
    );
  },
};

export const LabelPositions: Story = {
  render: () => {
    const [checkedLeft, setCheckedLeft] = useState(false);
    const [checkedRight, setCheckedRight] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Switch
          label="Label Left"
          labelPosition="left"
          checked={checkedLeft}
          onChange={(e) => setCheckedLeft(e.currentTarget.checked)}
        />
        <Switch
          label="Label Right"
          labelPosition="right"
          checked={checkedRight}
          onChange={(e) => setCheckedRight(e.currentTarget.checked)}
        />
      </div>
    );
  },
};

export const CustomThumbIcon: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Switch
        label="Custom thumb"
        size="xl"
        checked={checked}
        thumbIcon={<span style={{ color: 'black' }}>S</span>}
        onChange={(e) => setChecked(e.currentTarget.checked)}
      />
    );
  },
};
