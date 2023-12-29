import { Props } from '@/app/(docs)/docs/components/props-table/props-table';
import React from 'react';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';

const OptionTypeInfo = () => (
  <>
    <p>
      Option:{' '}
      <InlineCode>
        {'\u007B'} value: string; label: string; disable?: boolean; fixed?: boolean; [key:string]:
        string | undefined; {'\u007D'}
      </InlineCode>
      .
    </p>
    <p>
      The <InlineCode>[key:string]: string | undefined</InlineCode> is for you to customize{' '}
      <InlineCode> groupBy</InlineCode>
      field.
    </p>
  </>
);

export const multipleSelectorProp: Props[] = [
  {
    prop: 'value',
    required: false,
    description: (
      <>
        <p>Selected Value.</p>
      </>
    ),
    type: 'Option[]',
    typeInfo: <OptionTypeInfo />,
    default: '[]',
  },
  {
    prop: 'options',
    required: false,
    description: (
      <>
        <p>The dropdown options.</p>
      </>
    ),
    type: 'Option[]',
    typeInfo: <OptionTypeInfo />,
    default: '[]',
  },
  {
    prop: 'placeholder',
    required: false,
    description: (
      <>
        <p>The input placeholder.</p>
      </>
    ),
    type: 'string',
    default: ' ',
  },
  {
    prop: 'onChange',
    required: false,
    description: (
      <>
        <p>
          When you select or remove an option, the <InlineCode>onChange</InlineCode> will be called.
        </p>
      </>
    ),
    type: '(options: Option[]) => void',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'disabled',
    required: false,
    description: (
      <>
        <p>disabled select.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'delay',
    required: false,
    description: (
      <>
        <p>
          The debounce time. only work with <InlineCode>onSearch</InlineCode>.
        </p>
      </>
    ),
    type: 'number',
    default: '500',
  },
  {
    prop: 'onSearch',
    required: false,
    description: (
      <>
        <p>
          Load options from a remote source when user types. You can provide{' '}
          <InlineCode>delay</InlineCode> to set debounce time.
        </p>
      </>
    ),
    type: '(value: string) => Promise<Option[]>',
    typeInfo: <OptionTypeInfo />,
  },
  {
    prop: 'creatable',
    required: false,
    description: (
      <>
        <p>Create option when there is no option matched.</p>
      </>
    ),
    type: 'boolean',
    default: 'false',
  },
  {
    prop: 'groupBy',
    required: false,
    description: (
      <>
        <p>Group the options base on provided key.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'maxSelected',
    required: false,
    description: (
      <>
        <p>Limit the maximum number of selected options.</p>
      </>
    ),
    type: 'number',
    default: 'Number.MAX_SAFE_INTEGER',
  },
  {
    prop: 'maxTextLength',
    required: false,
    description: (
      <>
        <p>Limit the input text length.</p>
      </>
    ),
    type: 'number',
    default: 'Number.MAX_SAFE_INTEGER',
  },
  {
    prop: 'onMaxSelected',
    required: false,
    description: (
      <>
        <p>
          When the number of selected options exceeds the limit, the{' '}
          <InlineCode>onMaxSelected</InlineCode> will be called.
        </p>
      </>
    ),
    type: '(maxLimit: number) => void',
  },
  {
    prop: 'loadingIndicator',
    required: false,
    description: (
      <>
        <p>
          Show the loading component when <InlineCode>onSearch</InlineCode> is not finished.
        </p>
      </>
    ),
    type: 'ReactNode',
  },
  {
    prop: 'emptyIndicator',
    required: false,
    description: (
      <>
        <p>Show the empty component when there is no options.</p>
      </>
    ),
    type: 'ReactNode',
  },
  {
    prop: 'selectFirstItem',
    required: false,
    description: (
      <>
        <p>
          First item selected is a default behavior by{' '}
          <PropLink href="https://github.com/pacocoursey/cmdk">
            <InlineCode>cmdk</InlineCode>
          </PropLink>
          . That is why the default is <InlineCode>true</InlineCode>.
        </p>
        <p>This is a workaround solution by add a dummy item.</p>
        <p>
          Learn more about the{' '}
          <PropLink href="https://github.com/pacocoursey/cmdk/issues/171">
            <InlineCode>issue</InlineCode>
          </PropLink>
          .
        </p>
      </>
    ),
    type: 'boolean',
    default: 'true',
  },
  {
    prop: 'className',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind for whole selector.</p>
      </>
    ),
    type: 'string',
  },
  {
    prop: 'badgeClassName',
    required: false,
    description: (
      <>
        <p>Customize the style by adding tailwind for the selected options (badge).</p>
      </>
    ),
    type: 'string',
  },
];