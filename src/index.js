import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import _ from 'lodash';


const API_KEY = 'AIzaSyC_GzE5UvLbPXBJN6QKwNL4hRiAdqAOkbY';



class App extends Component {

  constructor(props){
    super(props);
    
    this.state = { 
      videos: [] ,
      selectedVideo: null
    };
    this.onSearchChanged('surfboard');

  }

  videoSelected(video){
    this.setState({selectedVideo});
  }

  onSearchChanged(imput){
    YTSearch({key: API_KEY,term: imput}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.onSearchChanged(term)} , 300);
    return (
      <div>
        <SearchBar onSearchChanged={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
        
      </div>
    );
  }
  
}

ReactDOM.render(<App />,document.querySelector('.container'));