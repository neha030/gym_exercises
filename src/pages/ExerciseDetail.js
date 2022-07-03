import React, { useEffect, useState }from 'react';
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData, YoutubeOptions } from "../utils/fetchData";
import { useParams} from 'react-router-dom';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    const fetchExercisesData = async () => {
       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com' ;
       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
       setExerciseDetail(exerciseDetailData);
       
       const YoutubeVideosData = await fetchData
       (
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, YoutubeOptions
        );
        setExerciseVideos(YoutubeVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);
  
        const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equimentExercisesData);
    }
    fetchExercisesData();
  },[id])
  return (
   <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
    <Detail exerciseDetail = {exerciseDetail}
    />
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
   </Box>
  )
}

export default ExerciseDetail