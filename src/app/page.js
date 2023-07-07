import Laptop3D from '@/components/3D/Laptop3D'

async function getContent() {
  return import('@/content/content.json').then((module) => module.default)
}

export default async function Home() {
  
  const content = await getContent()
  
  return (
    <main>
      <section className='flex flex-row flex-wrap justify-center p-8'>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'>{content.intro.title}</h1>
          <h2>{content.intro.subtitle}</h2>
        </div>
        <div className='basis-1/4'>
          <Laptop3D />
        </div>
      </section>
      <section>

      </section>
      <section>
        
      </section>
    </main>
  )
}
