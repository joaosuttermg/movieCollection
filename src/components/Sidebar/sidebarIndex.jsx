import styles from './sidebar.module.css';


export function SidebarItem(){

    return(

        <div>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cinema-3d-icon-download-in-png-blend-fbx-gltf-file-formats--entertainment-movie-film-video-pack-icons-6185394.png" alt="Logo React Movies" />
            <h1 className={styles.title}> react movies</h1>
        </div>
        
    )

}