import { PostList } from '../../shared/ui/Post'
import { projectsList } from './PostItemProps'

interface ProjectsMenuListProps  {
  className?: string
}



export const ProjectsMenuList = ({className}: ProjectsMenuListProps) => {
  return <PostList className={className} postList={projectsList} />
}