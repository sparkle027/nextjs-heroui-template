# Copilot Instructions

## 项目背景

本项目是基于 Next.js 的 React Web 应用，集成了 HeroUI、TailwindCSS、Prettier、ESLint 等现代前端技术栈，注重代码规范与开发效率。

## 代码风格与规范

- 遵循 ESLint 和 Prettier 规则，自动格式化和排序 import。
- 使用 TailwindCSS 进行样式开发，优先采用原子类。
- 组件命名采用大驼峰（PascalCase），文件命名采用小写加中划线（kebab-case）。
- 代码应简洁、易读，避免不必要的嵌套和重复。

## 代码建议偏好

- 优先使用函数式组件和 React Hooks。
- 推荐使用 TypeScript（如有 ts 支持）。
- 网络请求统一使用 axios。
- 动画优先使用 framer-motion。
- 图标优先使用 lucide-react 或 @icon-park/react。
- 复杂交互可结合 HeroUI 组件库。

## 其他说明

- 保持代码注释简洁明了，仅在必要处添加。
- 遇到样式冲突优先调整 TailwindCSS 类顺序。
- 遇到 ESLint 或 Prettier 报错时，优先修复而非忽略。
- **Git 提交信息需遵循 [Angular Commit Message 规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)。**

## Next.js App Router 规范

- 遵循 Next.js App Router（app 目录）最佳实践，页面、布局、模板等文件命名为 page.tsx、layout.tsx、template.tsx。
- 路由相关逻辑优先使用 app 目录下的文件结构实现，不使用 pages 目录。
- 服务端组件（Server Component）和客户端组件（Client Component）需根据实际需求合理区分，必要时在文件顶部添加 'use client'。
- 数据获取优先使用 Next.js 的 fetch、getServerSideProps、getStaticProps 或 React Server Components 的数据获取方式。
- 避免在 Server Component 中直接使用浏览器 API 或副作用 Hook（如 useEffect）。
