export const ButtonThemeType = {
  common: [
    'tw-rounded-md', 'tw-text-center', 'tw-font-medium', 'tw-transition', 'tw-duration-2',
    'disabled:tw-bg-gray-300', 'disabled:tw-text-gray-400', 'disabled:tw-border-gray-300'
  ],
  primary: [
    'tw-bg-ocean-500', 'tw-text-white',
    'hover:tw-bg-ocean-600', 
    'active:tw-bg-ocean-700'
  ],
  secondary: [
    'tw-bg-white', 'tw-border-2', 'tw-border-gray-700',
    'hover:tw-bg-gray-200', 
    'active:tw-bg-gray-300'
  ],
};

export const ButtonThemeSize = {
  regular: ['tw-min-w-[145px]', 'tw-px-4', 'tw-py-1.5', 'tw-text-base'],
  small: ['tw-min-w-[75px]', 'tw-px-2', 'tw-py-0.5', 'tw-text-sm'],
  large: ['tw-min-w-[175px]', 'tw-px-6', 'tw-py-2.5', 'tw-text-lg']
}

export const TextInputContainerTheme = [
  'tw-flex', 'tw-flex-col'
]

export const TextInputTheme = {
  common: [
    'tw-outline-none', 'tw-border-2', 'tw-border-gray-300', 'tw-rounded-md', 'tw-font-normal', 'tw-px-3', 'tw-pt-1', 'tw-pb-2', 'tw-transition', 'tw-duration-200',
    'focus:tw-border-ocean-500',
    'disabled:tw-text-gray-300', 'disabled:tw-border-gray-200',
  ]
}

export const TextInputLabelTheme = {
  common: ['tw-text-sm', 'tw-font-bold', 'tx-text-gray-500']
}
