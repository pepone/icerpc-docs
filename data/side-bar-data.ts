// Copyright (c) ZeroC, Inc.

import {
  SliceVersion,
  SideBarSourceType,
  isCategory,
  SideBarLink
} from 'types';
import {
  slice1Data,
  slice2Data,
  rpcCoreData,
  gettingStartedData
} from './index';

const SLICE_BASE_URL = '/docs/slice';
const RPC_CORE_BASE_URL = '/docs/icerpc-core';
const GETTING_STARTED_BASE_URL = '/docs/getting-started';

export const baseUrls = [
  SLICE_BASE_URL,
  RPC_CORE_BASE_URL,
  GETTING_STARTED_BASE_URL
];

export const flattenSideBarData = (
  sideBarData: SideBarSourceType[]
): SideBarLink[] => {
  return sideBarData.flatMap((item) => {
    if (isCategory(item)) {
      return item.links;
    } else {
      return item;
    }
  });
};

export const sideBarData = (
  baseUrl: string,
  sliceVersion: SliceVersion
): SideBarSourceType[] => {
  switch (baseUrl) {
    case GETTING_STARTED_BASE_URL:
      return gettingStartedData;
    case SLICE_BASE_URL:
      if (sliceVersion === 'Slice1') {
        return slice1Data;
      } else {
        return slice2Data;
      }
    case RPC_CORE_BASE_URL:
      return rpcCoreData;
    default:
      return [];
  }
};
