import React, { useState } from 'react';
import { Slider } from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';




const Background = ({ children}) => {
    return (
        <LinearGradient
            colors={['#010D4C', '#F84E7E']}
            style={{
                flex:1,
            }}
            >
            {children}
        </LinearGradient>    
    )
}

const TopBar = styled.View`
    flex-direction: row;
    padding-top: 30px;
    align-items: center;
`;
TopBar.Title = styled.Text`
    color: #FFFFFF;
    text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
`;
TopBar.Left = styled.View`
 flex: 1;
 padding-left: 16px;
`;
TopBar.Right = styled.View`
 flex: 1;
 padding-right: 16px;
 align-items: flex-end;
`;
TopBar.Middle = styled.View`
 flex: 2;
 align-items: center;
`;

/* //////// */

const ScreenArea = styled.View`
  flex: 1;
  padding: 32px;
`;

const CoverArea = styled.View`
  flex: 4; 
`;

CoverArea.Image = styled.Image`
  width: 100%;
  flex: 1;
  /* background: #CCCCCC; */
`;

const PlayerArea = styled.View`
  flex: 2; 
  justify-content: flex-end;
`;

PlayerArea.Title = styled.Text`
  color: white;
  font-size: 24px;
`;

PlayerArea.Author = styled.Text`
  color: #BBBBBB;
  font-size: 16px;
`;

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`
`;

Controls.Back = styled.TouchableOpacity`
    padding-right: 10px;
`;

Controls.Advance = styled.TouchableOpacity`
    padding-left: 10px;
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #FAFAFA;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #FAFAFA;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;


  
export function PlayerScreen() {
    const [segundos, setSegundos] = useState(0);

    return (
        <Background>
            <TopBar>
                <TopBar.Left>
                    <Icon name="chevron-down" size={16} color="#FFFFFF"/>
                </TopBar.Left>
                <TopBar.Middle>
                    <TopBar.Title>Tocando Podcast</TopBar.Title>
                    <TopBar.SubTitle>Hipster Ponto Tech</TopBar.SubTitle>
                </TopBar.Middle>
                <TopBar.Right>
                    <Icon name="ellipsis-v" size={16} color="#FFFFFF"/>
                </TopBar.Right>
            </TopBar>

            <ScreenArea>
        <CoverArea>
          <CoverArea.Image
            resizeMode="contain"
            source={{ uri: "https://placehold.it/750x750" }}
            />
        </CoverArea>

        <PlayerArea>
          <PlayerArea.Title>
            Angular vs React - Hipsters
          </PlayerArea.Title>
          <PlayerArea.Author>
          Hipsters Ponto Tech
          </PlayerArea.Author>

          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);                  
                }}
              />
              <Controls.Slider.CurrentTime>
                0:{segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>
                52:07
              </Controls.Slider.TotalTime>
            </Controls.Slider>
            <Controls.Back>
                <Icon name="backward" size={24} color="#FFFFFF"/>
            </Controls.Back>
            <Controls.Play>
                <Icon name="play-circle" size={50} color="#FFFFFF"/>
            </Controls.Play>
            <Controls.Advance>
                <Icon name="forward" size={24} color="#FFFFFF"/>
            </Controls.Advance>
          </Controls>
        </PlayerArea>
      </ScreenArea>

        </ Background>
    );
}
