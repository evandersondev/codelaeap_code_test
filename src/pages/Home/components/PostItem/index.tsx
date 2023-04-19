import { formatDistanceToNow } from 'date-fns'

import { DisplayContent } from '../../../../components/DisplayContent'
import { Modal } from '../Modal'
import { HomePostContent, PostWrapper } from './styles'

interface Post {
	id: number
	username: string
	created_datetime: string
	title: string
	content: string
}

interface PostProps {
	post: Post
}

export function PostItem({ post }: PostProps) {
	const username = localStorage.getItem('@codeleap:username')

	return (
		<HomePostContent>
			<PostWrapper>
				<header>
					<h3>{post.title}</h3>

					{post.username === username && (
						<div>
							<Modal post={post} type="delete" />
							<Modal post={post} type="edit" />
						</div>
					)}
				</header>

				<section>
					<span>@{post.username}</span>
					<span>
						{formatDistanceToNow(new Date(post.created_datetime), {
							addSuffix: true,
						})}
					</span>
				</section>

				<DisplayContent text={post.content} />
			</PostWrapper>
		</HomePostContent>
	)
}
