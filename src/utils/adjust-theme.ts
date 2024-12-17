export type ThemeStyle = 'default' | 'dark' | 'light';
export enum EnumThemeStyle {
  light = 'light',
  dark = 'dark',
}

export const adjustTheme = (theme: ThemeStyle = 'dark') => {
  document.documentElement.setAttribute('data-theme', `${theme}`); //更新注入的data-theme变量到html标签上
  document.documentElement.setAttribute('class', `${theme}`); //更新注入的data-theme变量到html标签上
};
