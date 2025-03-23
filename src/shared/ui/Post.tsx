import { PostItem, PostItemProps } from './PostItem/PostItem'

interface PostListNavigation {
  postList: PostItemProps[]
  onClick?: (item: string) => void
  className?: string
}

export const PostList = ({ postList, onClick, className }: PostListNavigation) => {
  return (
    <nav className={className}>
      {postList.map(({ title, image, id, typeFile, date, tags, countFiles, aiImages, count }) => (
        <PostItem
          title={title}
          image={image}
          id={id}
          aiImages={aiImages}
          tags={tags}
          onClick={onClick}
          typeFile={typeFile}
          date={date}
          countFiles={countFiles}
          count={count}
        />))}
    </nav>
  )
}






