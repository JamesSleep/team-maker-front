import React, {useState, useEffect} from 'react';
import TeamInfoPresenter from './TeamInfoPresenter';
import {userAPI} from '../../../../common/api';

export default ({navigation, route}) => {
  const {guild, nickname} = route.params.userInfo;
  const [data, setData] = useState({
    loading: true,
    list: null,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await userAPI.findGuild(guild);
    setData({
      loading: false,
      list: result[1],
    });
  };

  return (
    <TeamInfoPresenter
      data={data.list}
      guild={guild}
      loading={data.loading}
      myName={nickname}
    />
  );
};
