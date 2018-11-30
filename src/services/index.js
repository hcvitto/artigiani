import { artigiani } from './mocks/artigiani';

export const getArtigiani = () => artigiani.filter(a => a.public === true)

export const getArtigiano = (id) => {
  //const myId = id
  //console.log(myId)
  return artigiani.find(a => {
    //console.log(a.id)
    //console.log(a.id == myId)
    return a.id == id && a.public
  })
}