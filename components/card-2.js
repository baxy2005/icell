import Divider from './divider'

const posts = [
    {
      id: 1,
      title: 'Üzleti elemzés és üzleti modell kidolgozás',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/glossy-icons/license-key-4@2x.png',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
        id: 2,
        title: 'Webalkalmazások fejlesztése',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/glossy-icons/screen-share@2x.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },

      },
      {
        id: 3,
        title: 'Natív mobilalkalmazások fejlesztése',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/glossy-icons/mobile-development@2x.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
      },    
      {
        id: 4,
        title: 'UX és UI design, felhasználói kutatások',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/glossy-icons/ux-ui-2@2x.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
      },     
      {
        id: 5,
        title: 'Accessibility',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/glossy-icons/access@2x.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
      },     
      {
        id: 6,
        title: 'Adattárházak, reporting',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/glossy-icons/data-4@2x.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
      },       
    // More posts...
  ]
  
  export default function Card() {
    return (
      <div className="container py-6 sm:py-16 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl flex justify-center flex-col items-center text-center">
            <h2 className="text-3xl mb-4 font-bold text-white sm:text-4xl uppercase">Szolgáltatásaink</h2>
            <Divider />
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between glassy-bg rounded-3xl ">
                <div className="relative flex justify-center w-full pt-10">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className=" w-24 h-24 object-cover"
                  />
                </div>
                <div className="max-w-xl p-6 pb-10 flex flex-col gap-6">
                    <div className=" flex flex-col gap-4">
                        <div className="group relative text-center">
                            <h3 className="text-2xl leading-7 mb-4 font-medium  text-white group-hover:text-gray-600">
                            <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                            </h3>
                            <p className="line-clamp-2 text-sm leading-5 text-gray-300">{post.description}</p>
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
  