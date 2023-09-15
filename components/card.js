import Divider from './divider'
import Button from '../components/button';
import { ArrowRightIcon } from '@heroicons/react/20/solid'
const posts = [
    {
      id: 1,
      title: 'Megújult a weboldalunk',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/blog/icell-blog-1@2x.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Végh Lilla',
        role: 'HR',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Elkészült az első komponens a saját ds könyvtárunkban',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/blog/icell-blog-2@2x.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Zolnay Gábor',
          role: 'Product Design',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Csapatépítésre ment az Analyst line',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/blog/icell-blog-3@2x.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Zolnay Gábor',
          role: 'Product Design',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },   
    // More posts...
  ]
  
  export default function Card() {
    return (
      <div className="bg-white py-6 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl flex justify-center flex-col items-center text-center">
            <h2 className="text-3xl mb-4 font-bold text-gray-900 sm:text-4xl uppercase">Blogunk</h2>
            <Divider />
            <p className="mt-4 text-lg leading-8 text-gray-600">
            Olvass bele mivel foglalkozunk épp, merre járunk, mit csinálunk
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-start">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between bg-gray-100 rounded-3xl overflow-hidden">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/9]"
                  />
                </div>
                <div className="max-w-xl p-6 flex flex-col gap-6">
                    <div className=" flex flex-col gap-4">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                            </time>
                            <a
                            href={post.category.href}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                            {post.category.title}
                            </a>
                        </div>
                        <div className="group relative">
                            <h3 className="text-2xl leading-7 mb-2 font-medium leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                            </h3>
                            <p className="line-clamp-3 text-sm leading-5 text-gray-600">{post.description}</p>
                        </div>
                    </div>
                  <div className="flex justify-between items-center" >
                    <div className="relative flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                        <div className="text-sm leading-5">
                        <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                            </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                        </div>
                    </div>
                    <div className="" >
                    <Button size="comfortable" type="filled" style="primary"><ArrowRightIcon className="block h-6 w-6" aria-hidden="true" /></Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  