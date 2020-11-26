import { FluidObject } from "gatsby-image"

declare interface Title {
  text: string
  highlight: string
}
declare interface SimpleCardProps {
  title: string
  text: string
  imageName: string
  edges: any[]
  flip?: boolean
}

declare interface TeamItem {
  title: string
  subtitle: string
  imageName: string
}

declare interface TeamProps {
  title: string
  subtitle: string
  items: TeamItem[]
}

declare interface LogoProps {
  text: string
  color: string
  size: number
}

declare interface HeaderProps {
  logoExt: string
}

declare interface HeroProps {
  title: Title
  subtitle: string
}

declare interface WorkItem {
  imageName: string
  title: string
  subtitle: string
  bgColor: "primary" | "secondary"
  textColor: "black" | "white"
}

declare interface WorkProps {
  items: WorkItem[]
}

declare interface WorkBannerProps extends WorkItem {
  edges: any
}
