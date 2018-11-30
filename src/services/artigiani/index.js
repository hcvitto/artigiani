import { artigiani } from '../mocks/artigiani';

export const getArtigiani = () => artigiani

export const getArtigiano = (id) => artigiani.find(a => a.id === id)