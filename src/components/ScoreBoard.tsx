import React from 'react';
import { Player } from '../types';
import { Heart, Trophy, Star } from 'lucide-react';

interface ScoreBoardProps {
  player: Player;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ player }) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <span className="text-gray-950 font-bold ">{player.score}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Star className="w-6 h-6 text-blue-500" />
        <span className="text-gray-950 font-bold">Level {player.level}</span>
      </div>
      <div className="flex items-center space-x-1">
        {[...Array(player.lives)].map((_, i) => (
          <Heart key={i} className="w-6 h-6 text-red-500 fill-current" />
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;