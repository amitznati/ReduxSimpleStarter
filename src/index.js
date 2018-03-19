import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';


const API_KEY = 'AIzaSyC_GzE5UvLbPXBJN6QKwNL4hRiAdqAOkbY';



class App extends Component {

  constructor(props){
    super(props);
    
    this.state = { 
      videos: [] ,
      selectedVideo: null
    };
    

    YTSearch({key: API_KEY,term: 'surfboard'}, (videos) => {
      console.log(videos);
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  videoSelected(video){
    this.setState({selectedVideo});
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
        
      </div>
    );
  }
  
}

ReactDOM.render(<App />,document.querySelector('.container'));