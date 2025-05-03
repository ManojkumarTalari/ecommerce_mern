import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>The Bellman-Ford algorithm can also be used for graphs with positive edges (both directed and undirected), 
            like we can with Dijkstra's algorithm, but Dijkstra's algorithm is preferred in such cases because it is faster.</p>
          <p>
            Using the Bellman-Ford algorithm on a graph with negative cycles will not produce a result of shortest paths because
            in a negative cycle we can always go one more round and get a shorter path.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p> Using the Bellman-Ford algorithm on a graph with negative cycles will not produce a result of shortest paths 
            because in a negative cycle we can always go one more round and get a shorter path.</p>
        </div>
       </div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Using the Bellman-Ford algorithm on a graphwith negative cycles will not produce a result of shortest paths because
             in a negative cycle we can always go one more round and get a shorter path.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Using the Bellman-Ford algorithm on a graphwith negative cycles will not produce a result of shortest paths because
             in a negative cycle we can always go one more round and get a shorter path.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Using the Bellman-Ford algorithm on a graphwith negative cycles will not produce a result of shortest paths because
             in a negative cycle we can always go one more round and get a shorter path.</p>
        </div>
       </div>
       <NewsLetterBox/>
    </div>
  )
}

export default About
