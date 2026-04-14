import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-about-projects',
	template: `
	<div class="splashart">
		<video #vid class="main-img"
			poster="assets/imgs/SplashArt.png"
			autoplay muted loop playsinline
			preload="auto">
			<source type="video/mp4" src="assets/videos/Projects.mp4">
		</video>
	</div>
	<p class="title">Projects</p>
  `,
})
export class AboutProjectsComponent implements AfterViewInit {
	@ViewChild('vid') videoRef!: ElementRef<HTMLVideoElement>;

	ngAfterViewInit(): void {
		const video = this.videoRef.nativeElement;
		video.muted = true;
		video.load();
		video.play().catch(() => {
			// If still blocked, play once the user interacts with the page
			const resume = () => { video.play().catch(() => {}); document.removeEventListener('click', resume); };
			document.addEventListener('click', resume, { once: true });
		});
	}
}
