import { artigiani } from '../mocks/artigiani';

export const getArtigiani = () => artigiani.filter(a => a.public === true)

export const getArtigiano = (id) => {
  return artigiani.find(a => {
    return a.id == id && a.public
  })
}