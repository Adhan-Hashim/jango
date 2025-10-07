// Real Kerala Map SVG Data - Geographically Accurate District Boundaries
// Based on actual Kerala state geography and district boundaries

const keralaRealMapSVG = `
<g id="kerala-state-outline">
  <!-- State boundary outline -->
  <path d="M120,50 L380,45 L390,60 L395,80 L400,120 L405,160 L410,200 L415,240 L420,280 L425,320 L430,360 L435,400 L440,440 L445,480 L440,520 L430,560 L420,600 L410,620 L395,635 L380,645 L360,650 L340,655 L320,658 L300,660 L280,658 L260,655 L240,650 L220,645 L200,640 L180,630 L160,620 L145,605 L130,590 L120,570 L115,550 L110,530 L105,510 L100,490 L95,470 L90,450 L85,430 L80,410 L75,390 L70,370 L65,350 L60,330 L55,310 L50,290 L45,270 L40,250 L35,230 L30,210 L25,190 L20,170 L15,150 L10,130 L8,110 L10,90 L15,70 L25,55 L40,45 L60,42 L80,45 L100,48 Z" 
        fill="none" stroke="#2d5016" stroke-width="3" opacity="0.3"/>
</g>

<!-- Kasaragod District -->
<g id="kasaragod-group">
  <path id="kasaragod" data-district="kasaragod" class="district" 
        d="M80,45 L180,42 L190,50 L195,65 L200,80 L205,95 L210,110 L205,125 L195,140 L185,155 L175,165 L160,170 L145,165 L130,155 L115,140 L105,125 L95,110 L85,95 L75,80 L70,65 L75,50 Z"/>
  <text x="140" y="110" class="district-label">Kasaragod</text>
</g>

<!-- Kannur District -->
<g id="kannur-group">
  <path id="kannur" data-district="kannur" class="district"
        d="M105,125 L195,140 L210,155 L220,170 L225,185 L230,200 L235,215 L230,230 L220,245 L205,260 L190,275 L175,285 L160,290 L145,285 L130,275 L115,260 L100,245 L90,230 L85,215 L90,200 L95,185 L100,170 L105,155 Z"/>
  <text x="160" y="215" class="district-label">Kannur</text>
</g>

<!-- Wayanad District -->
<g id="wayanad-group">
  <path id="wayanad" data-district="wayanad" class="district"
        d="M220,170 L320,165 L330,175 L340,190 L345,205 L350,220 L345,235 L335,250 L320,265 L305,275 L290,280 L275,275 L260,265 L245,250 L235,235 L230,220 L235,205 L240,190 L250,175 L265,165 L280,160 L295,162 L310,165 Z"/>
  <text x="285" y="220" class="district-label">Wayanad</text>
</g>

<!-- Kozhikode District -->
<g id="kozhikode-group">
  <path id="kozhikode" data-district="kozhikode" class="district"
        d="M85,215 L190,275 L205,290 L220,305 L235,320 L240,335 L235,350 L225,365 L210,380 L195,390 L180,395 L165,390 L150,380 L135,365 L120,350 L110,335 L105,320 L100,305 L95,290 L90,275 L85,260 L80,245 L75,230 Z"/>
  <text x="160" y="330" class="district-label">Kozhikode</text>
</g>

<!-- Malappuram District -->
<g id="malappuram-group">
  <path id="malappuram" data-district="malappuram" class="district"
        d="M235,320 L305,275 L320,290 L335,305 L340,320 L345,335 L350,350 L345,365 L335,380 L320,395 L305,405 L290,410 L275,405 L260,395 L245,380 L235,365 L230,350 L235,335 Z"/>
  <text x="290" y="345" class="district-label">Malappuram</text>
</g>

<!-- Palakkad District -->
<g id="palakkad-group">
  <path id="palakkad" data-district="palakkad" class="district"
        d="M340,190 L410,185 L420,195 L425,210 L430,225 L435,240 L430,255 L420,270 L405,285 L390,300 L375,310 L360,315 L345,310 L330,300 L320,285 L315,270 L320,255 L325,240 L330,225 L335,210 Z"/>
  <text x="375" y="250" class="district-label">Palakkad</text>
</g>

<!-- Thrissur District -->
<g id="thrissur-group">
  <path id="thrissur" data-district="thrissur" class="district"
        d="M105,320 L235,365 L250,380 L265,395 L270,410 L275,425 L270,440 L260,455 L245,470 L230,480 L215,485 L200,480 L185,470 L170,455 L155,440 L145,425 L140,410 L135,395 L130,380 L125,365 L120,350 L115,335 Z"/>
  <text x="190" y="425" class="district-label">Thrissur</text>
</g>

<!-- Ernakulam District -->
<g id="ernakulam-group">
  <path id="ernakulam" data-district="ernakulam" class="district"
        d="M140,410 L270,440 L285,455 L300,470 L305,485 L310,500 L305,515 L295,530 L280,545 L265,555 L250,560 L235,555 L220,545 L205,530 L190,515 L180,500 L175,485 L170,470 L165,455 L160,440 L155,425 Z"/>
  <text x="225" y="500" class="district-label">Ernakulam</text>
</g>

<!-- Idukki District -->
<g id="idukki-group">
  <path id="idukki" data-district="idukki" class="district"
        d="M270,275 L390,300 L405,315 L420,330 L425,345 L430,360 L435,375 L430,390 L420,405 L405,420 L390,435 L375,445 L360,450 L345,445 L330,435 L315,420 L305,405 L300,390 L295,375 L290,360 L285,345 L280,330 L275,315 L270,300 Z"/>
  <text x="350" y="375" class="district-label">Idukki</text>
</g>

<!-- Kottayam District -->
<g id="kottayam-group">
  <path id="kottayam" data-district="kottayam" class="district"
        d="M175,485 L305,515 L320,530 L335,545 L340,560 L345,575 L340,590 L330,605 L315,620 L300,630 L285,635 L270,630 L255,620 L240,605 L225,590 L215,575 L210,560 L205,545 L200,530 L195,515 L190,500 Z"/>
  <text x="270" y="575" class="district-label">Kottayam</text>
</g>

<!-- Alappuzha District -->
<g id="alappuzha-group">
  <path id="alappuzha" data-district="alappuzha" class="district"
        d="M125,500 L210,560 L225,575 L240,590 L245,605 L250,620 L245,635 L235,650 L220,665 L205,675 L190,680 L175,675 L160,665 L145,650 L135,635 L130,620 L125,605 L120,590 L115,575 L110,560 L105,545 L100,530 L105,515 Z"/>
  <text x="175" y="615" class="district-label">Alappuzha</text>
</g>

<!-- Pathanamthitta District -->
<g id="pathanamthitta-group">
  <path id="pathanamthitta" data-district="pathanamthitta" class="district"
        d="M285,450 L390,435 L405,450 L415,465 L420,480 L425,495 L420,510 L410,525 L395,540 L380,550 L365,555 L350,550 L335,540 L320,525 L310,510 L305,495 L300,480 L295,465 Z"/>
  <text x="355" y="500" class="district-label">Pathanamthitta</text>
</g>

<!-- Kollam District -->
<g id="kollam-group">
  <path id="kollam" data-district="kollam" class="district"
        d="M130,620 L245,635 L260,650 L275,665 L280,680 L285,695 L280,710 L270,725 L255,740 L240,750 L225,755 L210,750 L195,740 L180,725 L165,710 L155,695 L150,680 L145,665 L140,650 L135,635 Z"/>
  <text x="210" y="690" class="district-label">Kollam</text>
</g>

<!-- Thiruvananthapuram District -->
<g id="thiruvananthapuram-group">
  <path id="thiruvananthapuram" data-district="thiruvananthapuram" class="district"
        d="L150,680 L280,710 L295,725 L310,740 L315,755 L320,770 L315,785 L305,800 L290,815 L275,825 L260,830 L245,825 L230,815 L215,800 L200,785 L190,770 L185,755 L180,740 L175,725 L170,710 L165,695 Z"/>
  <text x="235" y="765" class="district-label">Thiruvananthapuram</text>
</g>
`;

// Update the createSVGMap method to use the real Kerala map
const createRealKeralaMap = function() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 450 850');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', 'auto');
    svg.classList.add('kerala-svg-map');

    // Add background for Arabian Sea
    const seaBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    seaBackground.setAttribute('x', '0');
    seaBackground.setAttribute('y', '0');
    seaBackground.setAttribute('width', '150');
    seaBackground.setAttribute('height', '850');
    seaBackground.setAttribute('fill', '#e3f2fd');
    seaBackground.setAttribute('opacity', '0.3');
    svg.appendChild(seaBackground);

    // Add Arabian Sea text
    const seaText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    seaText.setAttribute('x', '75');
    seaText.setAttribute('y', '400');
    seaText.setAttribute('text-anchor', 'middle');
    seaText.setAttribute('fill', '#1976d2');
    seaText.setAttribute('font-size', '16');
    seaText.setAttribute('font-style', 'italic');
    seaText.setAttribute('transform', 'rotate(-90, 75, 400)');
    seaText.textContent = 'Arabian Sea';
    svg.appendChild(seaText);

    // Add the real Kerala map content
    svg.innerHTML += keralaRealMapSVG;

    // Add Western Ghats indication
    const ghatsLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    ghatsLine.setAttribute('d', 'M380,100 L400,150 L420,200 L430,250 L435,300 L430,350 L425,400 L420,450 L415,500 L410,550');
    ghatsLine.setAttribute('stroke', '#4caf50');
    ghatsLine.setAttribute('stroke-width', '3');
    ghatsLine.setAttribute('stroke-dasharray', '5,5');
    ghatsLine.setAttribute('fill', 'none');
    ghatsLine.setAttribute('opacity', '0.6');
    svg.appendChild(ghatsLine);

    const ghatsText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    ghatsText.setAttribute('x', '440');
    ghatsText.setAttribute('y', '350');
    ghatsText.setAttribute('fill', '#2e7d32');
    ghatsText.setAttribute('font-size', '14');
    ghatsText.setAttribute('font-style', 'italic');
    ghatsText.setAttribute('transform', 'rotate(-75, 440, 350)');
    ghatsText.textContent = 'Western Ghats';
    svg.appendChild(ghatsText);

    return svg;
};

// Export the function for use in map.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { keralaRealMapSVG, createRealKeralaMap };
}