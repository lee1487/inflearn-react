import { Col, Descriptions, PageHeader, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import History from "../../common/component/History";
import useFetchInfo from "../../common/hook/useFetchInfo";
import useNeedLogin from "../../common/hook/useNeedLogin";
import FetchLable from "../component/FetchLable";
import { actions, Types } from "../state";
import Department from "./Department";
import TagList from "./TagList";

/**
 *
 * @param {object} param
 * @param {import('react-router').match} param.match
 */
const User = ({ match }) => {
  useNeedLogin();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);

  const userHistory = useSelector((state) => state.user.userHistory);
  const dispatch = useDispatch();
  const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
    dispatch(actions.fetchUserHistory(name));
  }, [dispatch, name]);

  useEffect(() => {
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  //const isFetched = true;
  const { isFetched } = useFetchInfo(Types.FetchUser);

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={() => history.push("/")}
          title={
            <FetchLable label="사용자 정보" actionType={Types.FetchUser} />
          }
        >
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLable
                    label="소속"
                    actionType={Types.FetchUpdateUser}
                    fetchKey="department"
                  />
                }
              >
                <Department />
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <FetchLable
                    label="태그"
                    actionType={Types.FetchUpdateUser}
                    fetchKey="tag"
                  />
                }
              >
                <TagList />
              </Descriptions.Item>
              <Descriptions.Item label="수정 내역">
                <History items={userHistory} />
              </Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
};

export default User;
