<div class="snow" />

<style lang="scss">
  $grid-width: 640;
  $density: 64;
  $duration: 15s;
  $max-snow-diameter: 2;

  $grid-size: $grid-width * 1px;

  $grad: ();
  @for $i from 0 to $density {
    $diameter: random($max-snow-diameter);
    $position-h: random($grid-width - $diameter) * 1px;
    $position-v: random($grid-width - $diameter) * 1px;

    $snow-size: $diameter * 1px;

    $grad: $grad,
      radial-gradient(
        $snow-size $snow-size at $position-h $position-v,
        white 50%,
        transparent
      ) !global;
  }

  .snow {
    pointer-events: none;
    filter: drop-shadow(0 0 3px white);

    &,
    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      top: -$grid-size;
      background-image: $grad;
      background-size: $grid-size $grid-size;
      animation: snow linear infinite reverse;

      animation-duration: $duration * 4;
      opacity: 0.7;
    }

    &::before {
      margin-left: -$grid-width/2 * 1px;
      animation-duration: $duration;
      opacity: 0.3;
    }

    &::after {
      margin-left: -$grid-width/3 * 1px;
      animation-duration: $duration * 2;
      opacity: 0.5;
    }
  }

  @keyframes snow {
    to {
      transform: translateY($grid-size);
    }
  }
</style>
